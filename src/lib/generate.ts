import { cargoByMonth, areaByDay, techByLastDigit } from './mappings';

export interface TechProfile {
  cargo: string;
  area: string;
  tech: string;
  codinome: string;
}

export function fromBirthdate(dateStr: string): TechProfile {
  // Validate DD/MM/AAAA format
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dateStr.match(dateRegex);
  
  if (!match) {
    throw new Error('Data deve estar no formato DD/MM/AAAA');
  }

  const [, dayStr, monthStr, yearStr] = match;
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  // Basic validation
  if (month < 1 || month > 12) {
    throw new Error('Mês deve estar entre 01 e 12');
  }
  if (day < 1 || day > 31) {
    throw new Error('Dia deve estar entre 01 e 31');
  }
  if (year < 1900 || year > new Date().getFullYear()) {
    throw new Error('Ano deve ser válido');
  }

  const cargo = cargoByMonth[month];
  const area = areaByDay[day] || areaByDay[31]; // Fallback for invalid days
  const tech = techByLastDigit[year % 10];
  const codinome = `${cargo} de ${area} • ${tech}`;

  return { cargo, area, tech, codinome };
}

export function generateInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
}