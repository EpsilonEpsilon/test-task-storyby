
function getPageNumbers(currentPage: number, totalPages: number): number[] {
    const pages: number[] = [];

    if (currentPage < 1 || currentPage > totalPages) {
        throw new Error('Current page is out of range');
    }

    pages.push(1);

    if (currentPage > 3) {
        pages.push(currentPage - 2);
        pages.push(currentPage - 1);
    } else if (currentPage === 3) {
        pages.push(2);
    } else if (currentPage === 2) {
        pages.push(2);
    }

    if (currentPage !== 1) {
        pages.push(currentPage);
    }

    if (currentPage < totalPages - 1) {
        pages.push(currentPage + 1);
        pages.push(currentPage + 2);
    } else if (currentPage === totalPages - 1) {
        pages.push(currentPage + 1);
    }


    return Array.from(new Set(pages)).sort((a, b) => a - b);
}

export default getPageNumbers;
