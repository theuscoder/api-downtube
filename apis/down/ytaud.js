// importações

const ytdl = require('ytdl-core');
const express = require('express');
const { fs, createWriteStream } = require('fs');
const { filter, getInfo } = require('ytdl-core');

// função para baixar o audio

async function aud(res, url) {
    try {
    let info = await ytdl.getInfo(url);
    let format = ytdl.chooseFormat(info.formats, { quality: '140' }); // quality 140 para audio

    return res.json({
        url: format.url,
        status: 200,
        qualidade: '128kbps',
        tipo: 'mp3',
        criador: 'theuscoder'
    });
    } catch {
     return res.json({
        status: 500,
        msg: 'entre em contato com t.me/theuscoder para resolver o problema'
        });
    }
    
    }

// exportar a função vid para usar em outro script

module.exports = aud;