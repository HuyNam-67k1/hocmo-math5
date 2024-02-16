import { useState } from "react";
import Image from "next/image";
import { Button } from "marathon-design-system";
import { ArrowContainer, Popover } from "react-tiny-popover";
import ConfirmLogout from "@/components/molecules/Popup/ConfirmLogout";
import LogoutSvg from "@/components/Icon/logout.svg";
import { ROUTES } from "@/utils/constans";

interface UserMenuProps {
  setVisibleConfirmLogout: (visible: boolean) => void;
}
export const UserMenu = (props: UserMenuProps) => {
  const { setVisibleConfirmLogout } = props;

  const [openUserProfileDrawer, setOpenUserProfileDrawer] = useState(false);

  const getUser = window.localStorage.getItem("user");

  const user = JSON.parse(getUser || "{}");

  return (
    <Popover
      isOpen={openUserProfileDrawer}
      positions={["bottom"]}
      padding={16}
      containerClassName="z-[9999]"
      onClickOutside={() => setOpenUserProfileDrawer(false)}
      content={({ position, childRect, popoverRect }: any) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="white"
          arrowSize={10}
        >
          <nav
            className={`
              w-[200px] rounded-[8px] bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.1)] 
              pb-[16px] 
              text-sm lg:text-base
            `}
          >
            <div className="p-[16px] border-b border-[#F0F0F0] text-[#424242]">
              <p className="font-medium text-xl mb-2">Xin chào!</p>
              <p className="line-clamp-1 text-md lg:text-xl font-semibold text-[#219B67] mb-5">
                {user?.name}
              </p>
              <a
                href={ROUTES.ACCOUNT}
                className="font-semibold underline text-[#6392ef]"
              >
                Quản lý tài khoản
              </a>
            </div>
            <section className="mt-[16px] mx-7">
              <Button
                buttonType="link"
                onClick={() => setVisibleConfirmLogout(true)}
                leftIcon={
                  <LogoutSvg width={24} height={24} className="mr-2 mt-1.5" />
                }
                className="w-[150px] text-left flex p-2 !text-lg"
              >
                Đăng xuất
              </Button>
            </section>
          </nav>
        </ArrowContainer>
      )}
    >
      <button
        className={"overflow-hidden rounded-[50%] w-[40px] h-[40px] relative"}
        onClick={() => setOpenUserProfileDrawer(!openUserProfileDrawer)}
      >
        <Image src="/images/avatar.png" alt="avatar" fill sizes="100vw" />
      </button>
    </Popover>
  );
};

const AccountAuth = () => {
  const [visibleConfirmLogout, setVisibleConfirmLogout] = useState(false);

  return (
    <div className="flex items-center">
      <UserMenu setVisibleConfirmLogout={setVisibleConfirmLogout} />
      <ConfirmLogout
        visible={visibleConfirmLogout}
        setVisible={setVisibleConfirmLogout}
      />
    </div>
  );
};

export default AccountAuth;
