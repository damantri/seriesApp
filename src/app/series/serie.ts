// archivo: serie.ts
export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;
  
    constructor(data: Partial<Serie> = {}) {
      this.id = data.id || 0;
      this.name = data.name || '';
      this.channel = data.channel || '';
      this.seasons = data.seasons || 0;
      this.description = data.description || '';
      this.webpage = data.webpage || '';
      this.poster = data.poster || '';
    }
  }
  