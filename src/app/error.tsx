
'use client'

import Image from "next/image";
import {
  Empty,
  EmptyImage,
  EmptyTitle,
} from "keep-react";

const ErrorPage = () => {
  return (
    <div>
      <Empty>
        <EmptyImage>
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
            height={234}
            width={350}
            alt="404"
          />
        </EmptyImage>
        <EmptyTitle className="mb-[14px] mt-5">Something went wrong!</EmptyTitle>
      </Empty>
    </div>
  );
};

export default ErrorPage;
