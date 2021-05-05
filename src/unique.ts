export default function unique<T>(arr: Array<T>) {
  return Array.from(new Set(arr));
}
