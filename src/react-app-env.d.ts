/// <reference types="react-scripts" />

import "react";

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: "auto" | "eager" | "lazy";
  }
}