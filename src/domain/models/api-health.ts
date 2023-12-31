import { ApiHealthStatus } from '@domain/models/api-health-status';

export interface ApiHealth {
    status: ApiHealthStatus;
    message: string;
    time: Date;
    version: string;
}
