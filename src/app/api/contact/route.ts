import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const messagesFile = path.join(process.cwd(), "data", "messages.json");

type Incoming = {
  name?: string;
  email?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readMessages() {
  try {
    const raw = await fs.readFile(messagesFile, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let body: Incoming;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return Response.json({ error: "Message should be at least 10 characters." }, { status: 400 });
  }

  const entry = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  await fs.mkdir(path.dirname(messagesFile), { recursive: true });
  const existing = await readMessages();
  existing.push(entry);
  await fs.writeFile(messagesFile, JSON.stringify(existing, null, 2), "utf8");

  return Response.json({ ok: true, id: entry.id });
}
