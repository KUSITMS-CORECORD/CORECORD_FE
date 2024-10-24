import { useState } from 'react';
import * as S from './SelectBoxStyle';

interface SelectBoxProps {
  select: string;
  onChange: (value: string) => void;
}

export const SelectBox = ({ select, onChange }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);

  const SELECT_DATA = ['대학생', '대학원생', '취업준비생', '인턴', '재직중'];

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onChange(e.currentTarget.innerText);
    setOpen(false);
  };

  return (
    <S.Container>
      <S.SelectBox open={open} onClick={() => setOpen((prev) => !prev)}>
        <S.SelectText hasValue={!!select}>{select || '소속을 선택해주세요'}</S.SelectText>
        <S.Icon src="/icons/DownArrowIcon.svg" alt="downArrow" />
      </S.SelectBox>
      {open && (
        <S.Option>
          {SELECT_DATA.map((item) => (
            <S.Text key={item} onClick={handleClick}>
              {item}
            </S.Text>
          ))}
        </S.Option>
      )}
    </S.Container>
  );
};
