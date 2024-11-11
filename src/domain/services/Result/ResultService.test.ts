import { describe, it, expect, vi, Mock } from 'vitest';
import { ResultService } from './ResultService';
import getData from '@/infrastructure/data/getData.js';
import { ResultData } from '../../model/Result/ResultData';

vi.mock('@/infrastructure/data/getData.js');

describe('ResultService', () => {
    const resultService = new ResultService();

    it('should return filtered results based on type', async () => {
        const mockData: ResultData[] = [
            {
                type: 'dog', title: 'Golden Retriever',
                id: 0,
                url: '',
                description: '',
                image: ''
            },
            {
                type: 'cat', title: 'Siamese',
                id: 0,
                url: '',
                description: '',
                image: ''
            },
        ];
        (getData as Mock).mockResolvedValue(mockData);

        const results = await resultService.getResultsByTypeOrName('dog');
        expect(results).toEqual([{ type: 'dog', title: 'Golden Retriever',  id: 0,
            url: '',
            description: '',
            image: '' }]);
    });

    it('should return filtered results based on name', async () => {
        const mockData: ResultData[] = [
            {
                type: 'dog', title: 'Golden Retriever',
                id: 0,
                url: '',
                description: '',
                image: ''
            },
            {
                type: 'cat', title: 'Siamese',
                id: 0,
                url: '',
                description: '',
                image: ''
            },
        ];
        (getData as Mock).mockResolvedValue(mockData);

        const results = await resultService.getResultsByTypeOrName('siamese');
        expect(results).toEqual([{ type: 'cat', title: 'Siamese',  id: 0,
            url: '',
            description: '',
            image: '' }]);
    });

    it('should handle errors thrown by getData', async () => {
        const error = new Error('Failed to fetch data');
        (getData as Mock).mockRejectedValue(error);

        await expect(resultService.getResultsByTypeOrName('dog')).rejects.toThrow('Failed to fetch data');
    });
});