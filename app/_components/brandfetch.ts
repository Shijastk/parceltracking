export const BRANDFETCH_CLIENT_ID = "1idq3OQonwwF2lavFOT";

export function brandLogo(domain: string) {
  return `https://cdn.brandfetch.io/${domain}?c=${BRANDFETCH_CLIENT_ID}`;
}

export function brandIcon(domain: string) {
  return `https://cdn.brandfetch.io/${domain}/icon?c=${BRANDFETCH_CLIENT_ID}`;
}

export function brandSymbol(domain: string) {
  return `https://cdn.brandfetch.io/${domain}/symbol?c=${BRANDFETCH_CLIENT_ID}`;
}
