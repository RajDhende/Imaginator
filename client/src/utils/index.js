import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver'


export function getRandomPrompt(currentPrompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === currentPrompt) {
    return getRandomPrompt(currentPrompt);
  }

  return randomPrompt;
}


export async function downloadImage(_id, photo){
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}