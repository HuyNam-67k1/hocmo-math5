import CloseSvg from "@/components/Icon/close.svg";
import { ROUTES } from "@/utils/constans";
import { Modal, Button } from "marathon-design-system";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  visible: boolean;
  setVisible: (type: boolean) => void;
}

const ConfirmLogout = (props: Props) => {
  const router = useRouter();

  const { visible, setVisible } = props;

  return (
    <Modal isOpen={visible} toggle={() => setVisible(false)}>
      <div
        className={`
          w-[302px] relative 
          pt-[40px] px-[24px] pb-[24px] text-center 
          bg-[#FFF]
          rounded-2xl 
        `}
      >
        <Button
          buttonType="text"
          onClick={() => setVisible(false)}
          className="absolute right-0 top-0"
          leftIcon={<CloseSvg width={24} height={24} fill="#9E9E9E" />}
        />
        <Image
          src="/images/not-expect.png"
          className="mx-auto"
          alt=""
          width={150}
          height={110}
        />
        <p className="text-2xl text-[#242424] mt-[35px] font-semibold">
          Đăng xuất
        </p>
        <p className="text-md mt-4">
          Bạn không thể tiếp tục vào học
          <br />
          nếu đã đăng xuất.
          <br />
          <span className="text-[#294c80] mt-2 font-semibold text-md items-center">
            Bạn có muốn đăng xuất không?
          </span>
        </p>
        <div className="mt-[34px] flex gap-6">
          <Button
            buttonType="link"
            onClick={() => setVisible(false)}
            className="ml-5"
          >
            Không
          </Button>
          <Button
            buttonType="primary"
            onClick={() => {
              localStorage.removeItem("user");
              router.push(ROUTES.HOME);
            }}
          >
            Đăng xuất
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmLogout;
