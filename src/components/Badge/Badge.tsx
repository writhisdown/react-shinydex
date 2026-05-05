import React from "react";

import type { PokemonTypes } from "@/types/PokemonTypes"

import styles from "./Badge.module.scss";

import classNames from "classnames/bind";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string,
  variant?: "default" | PokemonTypes,
  children: React.ReactNode
};

const cx = classNames.bind(styles);

export default function Badge(
  { 
    className = '',
    variant = 'default',
    children,
    ...rest 
  }: BadgeProps) {
  return (
    <span 
      {...rest} 
      className={cx(`${className}`, "badge", `badge--${variant}`)}
    >
      {children}
    </span>
  );
}