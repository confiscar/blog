// Concatentates any string passed through with a space
const classNames = (...args: string[]) => {
    let concatString = '';
    args.forEach((text) => {
        concatString = concatString.concat(' ', text);
    });
    return concatString;
};

export default classNames;
