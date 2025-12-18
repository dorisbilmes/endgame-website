"use client";

interface FounderMessageProps {
  message: string;
  name: string;
  role: string;
  image: string;
}

export function FounderMessage({
  message,
  name,
  role,
  image,
}: FounderMessageProps) {
  // Split message into paragraphs
  const paragraphs = message.split("\n\n").filter(Boolean);

  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-10 md:p-12 w-full">
        {/* Message Content */}
        <div className="flex flex-col gap-4 mb-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-[var(--color-text-secondary)] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Founder Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-base font-medium text-[var(--color-text)]">
              {name}
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              {role}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
