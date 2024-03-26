import { Rule } from "@unocss/core";

/* global shadow token */
export const shadowToken: Rule[] = [
  // use of component hover（tree|table drag）
  ['shadow-1', {'box-shadow': '0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%)'}],
  // use of drag-down components，such as menu|select|tooltip
  ['shadow-2', {'box-shadow': '0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%)'}],
  // use of Modal|drawer|Message
  ['shadow-3', {'box-shadow': '0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%)'}],
]
