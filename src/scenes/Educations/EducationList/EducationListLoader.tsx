import ContentLoader from "react-content-loader";

export default function EducationListLoader() {
  // contenr Loader data 15개
  const contentLoaderArr = Array.from(Array(15).keys());

  return (
    <ul className="grid w-full grid-cols-1 gap-4">
      {contentLoaderArr.map((_, index) => (
        <li
          key={index + "dummy" + "education"}
          className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 shadow-md"
        >
          {/* 교육 이름 */}
          <ContentLoader uniqueKey="education-name" height={32}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
          </ContentLoader>

          {/* 교육 정보 */}
          <div className="flex justify-between gap-4">
            <div className="col-start">
              <div className="col-start gap-2">
                <ContentLoader
                  uniqueKey="education-people"
                  width={100}
                  height={32}
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
                <ContentLoader
                  uniqueKey="education-people__value"
                  width={100}
                  height={32}
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
              </div>
            </div>

            <div className="col-start">
              <div className="col-start gap-2">
                <ContentLoader
                  uniqueKey="education-price"
                  width={100}
                  height={32}
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
                <ContentLoader
                  uniqueKey="education-price__value"
                  width={100}
                  height={32}
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
              </div>
            </div>

            <div className="col-start">
              <div className="col-start gap-2">
                <ContentLoader
                  uniqueKey="education-status"
                  width={100}
                  height={32}
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
                <ContentLoader
                  uniqueKey="education-status__value"
                  width={100}
                  height={32}
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
