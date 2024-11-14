import api from './instance';

/**
 * [5.2] 역량별 경험 상세 조회
 * @param analysisId
 * @returns
 */
export async function getAnalysis(analysisId: number) {
  try {
    const response = await api.get(`/api/analysis/${analysisId}`);
    if (response.data.is_success) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [5.3] 역량 키워드별 경험 기록 리스트 조회
 * @param keyword
 * @param lastRecordId
 * @returns
 */
export async function getRecords(keyword: string, lastRecordId?: number) {
  try {
    const response = await api.get('/api/records/keyword', {
      params: {
        keyword: keyword,
        lastRecordId: lastRecordId || 0,
      },
    });
    if (response.data.is_success) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}
interface PatchFolderProps {
  recordId: number;
  folder: string;
}

/**
 *
 * [5.4] 폴더 변경하기
 * @param recordId - recordId
 * @param folder - 변경할 folder명
 * @returns
 */
export async function patchFolder({ recordId, folder }: PatchFolderProps) {
  try {
    const response = await api.patch('/api/records/folder', {
      recordId,
      folder,
    });
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [5.5] 역량 키워드 리스트 조회
 * @returns
 */
export async function getKeywordList() {
  try {
    const response = await api.get('/api/keyword');
    if (response.data.is_success) {
      return response.data.data.keywordList;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [7.2] 역량 분석 삭제하기
 * @returns
 */
export async function deleteAnaylsis(analysisId: number) {
  try {
    const response = await api.delete(`/api/analysis/${analysisId}`);
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
