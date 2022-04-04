function avenger(opt){
    let Avenger = () => ([
        `${opt.alias.toUpperCase()}`,
        `${opt.powers.join('\n')}`
    ]).join('\n')
    Avenger.toString = () => [
        `name: ${opt.name}`,
        `gender: ${opt.gender}`,
        `age: ${opt.age}`
    ].join('\n');
    return Avenger
}

module.exports.Avenger = avenger
