const sym = (...args) => {
    let symmetric = args.reduce((acc, next, idx) => {
        return [...acc].filter(x => !next.includes(x)).concat([...next].filter(y => !acc.includes(y)))
    })
    return [...(new Set(symmetric.sort()))]
}




sym([1, 2, 3], [5, 2, 1, 4]);