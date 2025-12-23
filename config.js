const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9lY161RgQBcSIjhigUa7eUEQ29qGEElBuVhUoTvjvG9jdM/2wO9vLU5FVkXnynJP5AxRlSpCFWjD5ASqcNpCi7kjbCoEJUOrjEWHQBxGkEEyAo6rT0yu7P7CexrhVFBv3JDhFfr7fi9aKWatR084H9dCcrl7Aow+q+pCl4W8SbrzeVpxTeJi6wwiSIjrxOz1cyosDX9IeNoMNFXzOTg+68QIeXUaY4rSItSpBOcIws1C7hCn+GvytwbBSmPm91eIe2Syyl/7wopx34t6PFnbSVOn9Us+GbG/qfA1+lrwe4Lo9JA0KoLTchAFT1eg6uyZjdjFauxuOk9XV66zl2Df4JI0LFBkRKmhK2y/zzs72bRmtdVkUtoQz200TGiWTBXI9l2ZmY/GH7f5GLrPjLvwacNX2Nm7PWZvtOrfsgFDL6MGzfQ+U0CmPVubp0iUukDZItp+BL/GHV87/h/fQ0u789NyzFF0xGXpIppbO3U/kpFscHqSctnOSqdTLjK32NfjSaD/mt/7MFl2Z9/fHXa6/Bia+NvjGTkUdJXS+DqfWhec+wYe0xr9Daa5eSZuvLxnnXm1uGa6iRbD1h6daHMd5QSo/UA6FKNz4lTLQx+NA0WqflQLmOLUy/m6vErW2lbmYsfFltDfTzGF2hbp6eXZ0Rq0Rgcng0QcYxSmhGNK0LLoYx3N9AKPGRSFG9EkvuMfr80mX3V6m4L2phUMpgV6+8mWmdMit4LB9WouIyPOKfQF9UOEyRISgSE8JLXHrIEJgjAiY/PlXHxToRt+E68oNB31wTDGh26KushJGH6p+XMIwLOuCum0Rqt0BYTBhf4URpWkRk47HuoA4TNIGqQmkBEyOMCPoZ4cIowhMKK7Rz6lVy6gjfiCzhucFW9AH+VOQNOo05YbscCwNRwInTLjv5Nu1ywqr6luBKOiD7PlqIIgSLwkjfsRJ4liacN+7eB8UsEsFdHhB6ALpH0tIYBF11L8D7+pEiMI0I53/58MZdygVzd45F1LOZrIRy2osg1+NfjjmTZFNfuIPtcCODc0sVwHyStH1bcFtZkdzu5NFhvrl8ZqJqb9/+YckYAL44XIXr3PHzgV/Gp9Ls8WMnwWV5uRwvLYgdkeXuXdyDKdnhlW2vM4Uyrw2ZqiIONK02dkTiccHS16fDxm+2fHleSTLL121CDVpiD4Xw76WGtkiGCPMCNYArx1TO0zvbK/orUSxdvjB1VCu6bIJ15sTJ27GqqtsvCyYb4vbAG5W8BVWh61XnQVNSoZi7s5hLsdvXn7OUva+w9KnyzoJu99jip4r4V2N/5L0DXdnPPbR/5Tifcf8y5wqW77s7cSaLlVFhdrMz+CCzdreGd+K1pvGC0b0BH1solHGgcfjrz6oMkiPJc7BBMAiwuXTMbisOycbxbH83aJUDEOVY7VrPIOEyr+mY5PmiFCYV2AyEAVhJA1EVnp7tcRlpUOSgAlY7s680jm9lavKpZB+zBqQu2/RRuDxN/RLx+CHBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
