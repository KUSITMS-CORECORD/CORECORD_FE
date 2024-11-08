import { useNavigate } from 'react-router-dom';
import * as S from './Content.Style';
import { List } from '../../common/list/List';

interface ListItem {
  id: number;
  title: string;
  chips: string[];
  date: string;
}

const LISTDATA: ListItem[] = [
  {
    id: 1,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 1,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 1,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
]; // 추후 백엔드에서 받아오면 다른 방식으로 변경할 것!

export const Content = () => {
  const navigate = useNavigate();

  return (
    <S.Content>
      {LISTDATA.length > 0 ? (
        LISTDATA.map((item, index) => (
          <List
            key={index}
            title={item.title}
            chips={item.chips}
            date={item.date}
            onClick={() => {
              navigate(`/report/${item.id}`);
            }}
          />
        ))
      ) : (
        <S.EmptyContainer>
          <S.Empty />
          <S.EmptyMessage>아직 작성한 경험이 없어요!</S.EmptyMessage>
          <S.Description>
            모아모아와 함께 <br /> 내 경험과 역량을 모아보세요!
          </S.Description>
        </S.EmptyContainer>
      )}
    </S.Content>
  );
};
