"use client";

import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "selected";

export function CopyWechatButton({
  value,
  targetId = "wechat-id",
}: {
  value: string;
  targetId?: string;
}) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = window.setTimeout(() => setCopyState("idle"), 2200);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopyState("copied");
    } catch {
      const target = document.getElementById(targetId);
      const selection = window.getSelection();
      if (!target || !selection) return;
      const range = document.createRange();
      range.selectNodeContents(target);
      selection.removeAllRanges();
      selection.addRange(range);
      setCopyState("selected");
    }
  }

  return (
    <button type="button" className="text-link copy-button" onClick={copy}>
      <span className="lang lang-zh">
        {copyState === "copied"
          ? "已复制"
          : copyState === "selected"
            ? "已选中，可手动复制"
            : "复制微信号"}
      </span>
      <span className="lang lang-en" lang="en">
        {copyState === "copied"
          ? "Copied"
          : copyState === "selected"
            ? "Selected — copy manually"
            : "Copy WeChat ID"}
      </span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}
