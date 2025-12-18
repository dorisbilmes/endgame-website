/**
 * Tabs Component
 *
 * Interactive tab component for switching between content panels.
 */

"use client";

interface Tab {
  id: number | string;
  title: string;
  description?: string;
}

interface TabsProps {
  tabs: Tab[];
  activeIndex: number;
  onTabChange: (index: number) => void;
  showProgress?: boolean;
  className?: string;
  variant?: "default" | "compact";
}

export function Tabs({
  tabs,
  activeIndex,
  onTabChange,
  showProgress = false,
  className = "",
  variant = "default",
}: TabsProps) {
  const containerStyles = {
    default: "flex flex-col gap-4",
    compact: "grid grid-cols-1 md:grid-cols-4 gap-4",
  };

  return (
    <div className={`${containerStyles[variant]} ${className}`}>
      {tabs.map((tab, i) => (
        <TabItem
          key={tab.id}
          tab={tab}
          isActive={activeIndex === i}
          onClick={() => onTabChange(i)}
          showProgress={showProgress && activeIndex === i}
          variant={variant}
        />
      ))}
    </div>
  );
}

interface TabItemProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
  showProgress?: boolean;
  variant: "default" | "compact";
}

function TabItem({
  tab,
  isActive,
  onClick,
  showProgress,
  variant,
}: TabItemProps) {
  const baseStyles =
    "p-5 rounded-[var(--radius-button)] cursor-pointer border transition-all text-left";
  const activeStyles =
    "bg-[var(--color-surface-2)] border-[var(--color-border)]";
  const inactiveStyles =
    "border-transparent hover:bg-white/5 hover:border-[var(--color-border)]";

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles} relative`}
    >
      <h3 className="text-xl font-medium text-[var(--color-text)] mb-2">
        {tab.title}
      </h3>
      {tab.description && (
        <p className="text-[var(--color-text-secondary)]">{tab.description}</p>
      )}
      {showProgress && variant === "default" && (
        <div className="absolute bottom-6 left-6 right-6 h-px bg-white/10">
          <div
            className="h-full bg-[var(--color-accent)] animate-[progress_5s_linear]"
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

