{/* 動かないんで後で修正 */}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ERROR",
  description: "Page Not Found",
};

export default function NotFound() {
  return (
    <div>
      NOT FOUND: ないにょ
    </div>
  );
}