import { toPng } from 'html-to-image';

export async function downloadBadgeAsPNG(elementId: string, filename: string = 'cracha-tech.png') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Elemento não encontrado');
  }

  try {
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: 'transparent',
      filter: (node) => {
        // Exclude download buttons from the export
        return !node.classList?.contains('download-exclude');
      }
    });
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Erro ao baixar o crachá:', error);
    throw new Error('Falha ao gerar a imagem');
  }
}