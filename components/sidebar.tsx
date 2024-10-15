import {Image} from "@nextui-org/image";
import { FourthIcon, SecondIcon, ThirdIcon, UserIcon } from "./icons";

export const SideBar = () => {
    return(
        <aside className="flex flex-col items-center h-full bg-white w-[19%] pt-16 gap-8">
            <Image
            width={100}
            alt="NextUI hero Image"
            src="/image.png"
            />
            <ul className="w-full px-8">
            
            <li className="flex gap-2 items-center justify-start pl-4 p-2 bg-[#424242] w-full rounded-md"><UserIcon className="relative top-0.5 text-white"  /><p className="text-white">회원관리</p></li>
            <li className="flex gap-2 items-center justify-start pl-4 p-2  w-full rounded-md"><SecondIcon className="relative top-0.5"  /><p className="text-[#A2ABAF]">매출 관리</p></li>
            <li className="flex gap-2 items-center justify-start pl-4 p-2  w-full rounded-md"><ThirdIcon className="relative top-0.5"  /><p className="text-[#A2ABAF]">단체방 관리</p></li>
            <li className="flex gap-2 items-center justify-start pl-4 p-2  w-full rounded-md"><FourthIcon className="relative top-0.5"  /><p className="text-[#A2ABAF]">시스템 관리</p></li>
            </ul>
        </aside>
    )
}