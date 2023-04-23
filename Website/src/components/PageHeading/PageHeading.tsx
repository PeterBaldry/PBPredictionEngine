import './PageHeading.css';

type PageHeadingProps = {
  pageTitle: string
}

function PageHeading(props: PageHeadingProps) {
  
  return (
    <div className="page-heading">
      <h1 className="page-heading__title">{props.pageTitle}</h1>
    </div>
  );
}

export default PageHeading;