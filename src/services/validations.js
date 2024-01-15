// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    if (gamerTag === undefined) return false;
    if (gamerTag.length >= 8) {
        return true;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(gamerTag)) {
        return true;
    }

    return false;
};

exports.isValid = isValid;
