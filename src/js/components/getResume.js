import { resumeDownloadRef } from '../config/references';
import apiService from '../services/api-service';

export const getResume = async () => {
  const response = await apiService.getResume();
  resumeDownloadRef.setAttribute('href', URL.createObjectURL(response.file));
  resumeDownloadRef.setAttribute('download', response.originalFileName);
};
