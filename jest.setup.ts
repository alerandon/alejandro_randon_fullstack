import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

process.env.VITE_SPOTIFY_API_CLIENT_ID = 'mock-client-id';
process.env.VITE_SPOTIFY_API_SECRET = 'mock-secret';
