export interface Base {
  message?: string;
  loading: 'idle' | 'pending' | 'failed',
  currentRequestId?: string,
  error: string | null
}