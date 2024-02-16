import { ROUTES } from "@/utils/constans";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="xl:py-10 xl:max-w-[1200px] xl:mx-auto xl:px-0 px-[1rem]">
        <footer className="bg-[#eeeeee] dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-2">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href={ROUTES.HOME} className="flex items-center">
                  <Image
                    src="/images/logo-hocmo.png"
                    className="me-3"
                    alt="logo-hocmo"
                    width={150}
                    height={150}
                  />
                </a>
                <div className="text-xl font-medium text-[#07375C] dark:text-white">
                  <p>Website Ôn Tập Kiến Thức</p>
                  <p>Toán Học Cho Học Sinh Lớp 5</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:gap-3 sm:grid-cols-3">
                <div className="ml-16">
                  <h2 className="mb-6 text-md font-semibold text-[#07375C] uppercase dark:text-white">
                    Về Website
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href={ROUTES.ABOUT} className="hover:underline">
                        Giới thiệu
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-[#07375C] uppercase dark:text-white">
                    Chính Sách & Hỗ Trợ
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href={ROUTES.TERM} className="hover:underline ">
                        Điều khoản sử dụng
                      </a>
                    </li>
                    <li>
                      <a href={ROUTES.ABOUT} className="hover:underline">
                        Giải đáp thắc mắc
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-[#07375C] uppercase dark:text-white">
                    Chương Trình Học Tiêu Biểu
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href={`${ROUTES.COURSE}${ROUTES.CURRICULUM_DETAIL}`}
                        className="hover:underline"
                      >
                        Toán học lớp 5
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href={ROUTES.LDB}
                        target={"_blank"}
                        className="hover:underline "
                      >
                        Mở ra học Toán lớp 5
                      </a>
                    </li>
                    <li>
                      <a href={ROUTES.TEST_BANK} className="hover:underline">
                        Luyện đề
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-[#9e9d9d] sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023&nbsp;
                <a href={ROUTES.HOME} className="hover:underline">
                  HocMo™
                </a>
                . Copyright not registered.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="https://www.facebook.com/profile.php?id=61554029970281"
                  target={"_blank"}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    src="https://marathon.edu.vn/images/facebook.png"
                    alt="social-facebook-fanpage"
                    className="w-6 h-6"
                  />
                </a>

                <a
                  href="https://www.youtube.com/@hocmo.education"
                  target={"_blank"}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <img
                    src="https://marathon.edu.vn/images/youtube.png"
                    alt="social-youtube"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
