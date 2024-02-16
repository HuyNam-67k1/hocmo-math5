"use client";

import { useMemo } from "react";
import { Icons, Typography, styled, theme } from "marathon-design-system";
import Image from "../../atoms/Image";

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoCardProps {
  onClick: (videoId: string) => void;
  id: string;
  snippet: {
    title: string;
    resourceId?: { videoId: string };
    thumbnails?: {
      default?: Thumbnail;
      medium?: Thumbnail;
      standard?: Thumbnail;
      high?: Thumbnail;
      maxres?: Thumbnail;
    };
  };
  className?: string;
  thumbnailClassName?: string;
  titleClassName?: string;
}

const ThumbnailStyled = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 16px;
`;

const PlayBtnStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoCard = (props: VideoCardProps) => {
  const { title, thumbnails, resourceId } = props.snippet;
  const { className, thumbnailClassName, titleClassName } = props;

  const thumbnailUrl = useMemo(
    () =>
      thumbnails?.maxres?.url ||
      thumbnails?.high?.url ||
      thumbnails?.standard?.url,
    [thumbnails]
  );

  const ratio = useMemo(() => {
    if (thumbnails?.maxres) {
      return thumbnails.maxres.height / thumbnails.maxres.width;
    }
    if (thumbnails?.high) {
      return thumbnails.high.height / thumbnails.high.width;
    }
    if (thumbnails?.standard) {
      return thumbnails.standard.height / thumbnails.standard.width;
    }
  }, [thumbnails]);

  return (
    <div className={className}>
      <ThumbnailStyled
        onClick={() => props.onClick(resourceId?.videoId as string)}
        className={thumbnailClassName}
      >
        <Image
          src={thumbnailUrl as string}
          fallback="/images/marathon-default.png"
          alt={title}
          ratio={ratio}
        />

        <PlayBtnStyled>
          <Icons.Play width={70} height={70} />
        </PlayBtnStyled>
      </ThumbnailStyled>
      <div className={titleClassName}>
        <Typography
          type={"p-2"}
          color={theme.colors["secondary-900"]}
          className={"line-clamp-3"}
          as="p"
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default VideoCard;
