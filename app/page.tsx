'use client';

import { FifthIcon, UserIcon } from "@/components/icons";
import { Pagination } from "@nextui-org/pagination";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { useTheme } from "next-themes";
import { useState } from "react";

interface Reservation {
  time: string;
  name: string;
  phone: string;
  course: string;
  birth_year: string;
}

const mockData = {
  count: 20,
  results: [
    { time: "11:00", name: "홍길동", phone: "010-1111-2222", course: "77", birth_year: "개항장거리 - 차이나타운" },
    { time: "12:00", name: "김철수", phone: "010-2222-3333", course: "5", birth_year: "개항장거리" },
    { time: "13:00", name: "이영희", phone: "010-4444-5555", course: "3", birth_year: "해변 투어" },
    { time: "14:00", name: "박지민", phone: "010-6666-7777", course: "4", birth_year: "문화재 탐방" },
    { time: "15:00", name: "최민수", phone: "010-8888-9999", course: "2", birth_year: "도시 탐험" },
    { time: "16:00", name: "안소영", phone: "010-1111-3333", course: "6", birth_year: "자연 산책" },
    { time: "17:00", name: "이준호", phone: "010-2222-4444", course: "8", birth_year: "전통 시장 투어" },
    { time: "18:00", name: "윤아", phone: "010-5555-6666", course: "12", birth_year: "미식 투어" },
    { time: "11:00", name: "홍길동", phone: "010-1111-2222", course: "77", birth_year: "개항장거리 - 차이나타운" },
    { time: "12:00", name: "김철수", phone: "010-2222-3333", course: "5", birth_year: "개항장거리" },
    { time: "13:00", name: "이영희", phone: "010-4444-5555", course: "3", birth_year: "해변 투어" },
    { time: "14:00", name: "박지민", phone: "010-6666-7777", course: "4", birth_year: "문화재 탐방" },
    { time: "15:00", name: "최민수", phone: "010-8888-9999", course: "2", birth_year: "도시 탐험" },
    { time: "16:00", name: "안소영", phone: "010-1111-3333", course: "6", birth_year: "자연 산책" },
    { time: "17:00", name: "이준호", phone: "010-2222-4444", course: "8", birth_year: "전통 시장 투어" },
    { time: "18:00", name: "윤아", phone: "010-5555-6666", course: "12", birth_year: "미식 투어" },
    { time: "11:00", name: "홍길동", phone: "010-1111-2222", course: "77", birth_year: "개항장거리 - 차이나타운" },
    { time: "12:00", name: "김철수", phone: "010-2222-3333", course: "5", birth_year: "개항장거리" },
    { time: "13:00", name: "이영희", phone: "010-4444-5555", course: "3", birth_year: "해변 투어" },
    { time: "14:00", name: "박지민", phone: "010-6666-7777", course: "4", birth_year: "문화재 탐방" },
    { time: "15:00", name: "최민수", phone: "010-8888-9999", course: "2", birth_year: "도시 탐험" },
    { time: "16:00", name: "안소영", phone: "010-1111-3333", course: "6", birth_year: "자연 산책" },
    { time: "17:00", name: "이준호", phone: "010-2222-4444", course: "8", birth_year: "전통 시장 투어" },
    { time: "18:00", name: "윤아", phone: "010-5555-6666", course: "12", birth_year: "미식 투어" },
  ] as Reservation[],
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const { theme, setTheme } = useTheme();
  setTheme("light");

  const pages = Math.ceil(mockData.count / rowsPerPage );
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = mockData.results.slice(startIndex, startIndex + rowsPerPage);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="flex gap-2 w-full justify-end">
        <h1 className="text-[#A2ABAF]">관리자 님</h1>
        <h1 className="bg-[#A2ABAF] px-3 rounded-md">로그아웃</h1>
      </div>

      <div className="grid grid-cols-3 gap-3 w-full px-3 mb-6">
        <div className="flex w-full bg-white p-2 items-center justify-between gap-1 rounded-md">
          <div className="flex items-center">
            <UserIcon />
            <p>신규 회원</p>
          </div>
          <p className="text-[#6D8EEB]">00명</p>
        </div>

        <div className="flex w-full bg-white p-2 items-center justify-between gap-1 rounded-md">
          <div className="flex items-center">
            <UserIcon />
            <p>탈퇴 회원</p>
          </div>
          <p className="text-[#F46F6F]">00명</p>
        </div>

        <div className="flex w-full bg-white p-2 items-center justify-between gap-1 rounded-md">
          <div className="flex items-center">
            <FifthIcon />
            <p>1:1문의 미답변</p>
          </div>
          <p className="text-[#424242]">00건</p>
        </div>
      </div>

      <div className="w-full px-3">
        <h1 className="text-center text-lg font-bold mb-4">8월 10일 예약현황</h1>
        <Table
          color="primary"
          isStriped
          fullWidth
          aria-label="Example table with custom data pagination"
          bottomContent={
            pages > 0 ? (
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  classNames={{
                    // wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
                    // item: "w-8 h-8 text-small rounded-none ",
                    cursor:
                      "bg-[#424242] text-white font-bold",
                  }}
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            ) : null
          }
        >
          <TableHeader>
            <TableColumn key="time">투어시간</TableColumn>
            <TableColumn key="name">예약자명</TableColumn>
            <TableColumn key="phone">휴대폰 번호</TableColumn>
            <TableColumn key="course">투어인원</TableColumn>
            <TableColumn key="birth_year">투어코스</TableColumn>
          </TableHeader>
          <TableBody
            items={paginatedData}
            loadingState={mockData.results.length === 0 ? "loading" : "idle"}
          >
            {(item: Reservation) => (
              <TableRow key={item.name}>
                {(columnKey: any) => (
                  <TableCell>{item[columnKey as keyof Reservation]}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Dropdown for rows per page */}
        <div className="flex justify-center mt-4">
          <label htmlFor="rowsPerPage" className="mr-2">Rows per page:</label>
        </div>
      </div>
    </section>
  );
}
