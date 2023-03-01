/**
 * Default TailwindCSS colors. Here for autocomplete, though components can 
 * accept arbitrary string values for theme & custom color compatibility.
 * 
 * @author Liz Ainslie
 */
export const colors = [
  'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber',
  'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo',
  'violet', 'purple', 'fuchsia', 'pink', 'rose',
] as const;

export type Color = typeof colors; 

export type PropsWithColor = {
  color: Color | string;
};
