import { defineEventHandler } from 'h3'
import { useStorage } from '#internal/nitro'

export default defineEventHandler(async () => {
  const data = await useStorage().getItem('fs:test.txt');

  return {
    data,
  };
});