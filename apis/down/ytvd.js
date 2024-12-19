// importações

const ytdl = require('ytdl-core');
const express = require('express');
const { fs, createWriteStream } = require('fs');
const { filter, getInfo } = require('ytdl-core');

// função para baixar o video

async function vid(res, url) {
    try {
    let info = await ytdl.getInfo(url);
    let format = ytdl.chooseFormat(info.formats, { quality: '18' }); // quality 18 para video com audio

    return res.json({
        url: format.url,
        qualidade: '360p',
        tipo: 'mp4',
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

module.exports = vid;