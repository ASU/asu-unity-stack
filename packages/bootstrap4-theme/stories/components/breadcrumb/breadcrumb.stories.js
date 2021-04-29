export default { title: 'Components/Breadcrumbs' };

export const breadcrumbsAgainstWhiteBackground = () => `
  <div class="bg-white">
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
`;

export const breadcrumbsAgainstGray1Background = () => `
  <div class="bg-gray-1">
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
`;

export const breadcrumbsAgainstGray2Background = () => `
  <div class="bg-gray-2">
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
`;

export const breadcrumbsAgainstGray7Background = () => `
  <div class="bg-gray-7">
    <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
        <li class="breadcrumb-item active text-gray-1" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
`;
