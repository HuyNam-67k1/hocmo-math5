import Container from "../atoms/container";
import Link from "next/link";
import Button from "../atoms/button";

interface NotFoundPageProps {
  ctaTitle?: string;
  ctaUrl?: string;
  resoureType?: string;
}
function NotFoundPage({
  ctaTitle = "Về trang chủ",
  ctaUrl = "/",
  resoureType = "Tài nguyên",
}: NotFoundPageProps) {
  return (
    <Container>
      <div className="w-full text-center pt-20 min-h-[100vh]">
        <h1 className="mb-10 text-5xl font-medium text-[#219b67]">404</h1>
        <p className="mb-5 text-[#424242]">
          {resoureType} bạn đang tìm kiếm hiện đang không sẵn sàng.
          <br />
          Xin lỗi vì sự bất tiện.
        </p>

        <Button buttonType={"primary"}>
          <Link href={ctaUrl}>{ctaTitle}</Link>
        </Button>
      </div>
    </Container>
  );
}
export default NotFoundPage;
