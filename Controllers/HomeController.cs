﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Hotsite.Models;

namespace Hotsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Cadastrar(Interesse cad)
        {
            
            try
            {
            DatabaseService dbs = new DatabaseService();
            dbs.CadastraInteresse(cad);
            //ViewData["mensagem"] = "Enviado com sucesso";

            return Json(new {status="Ok"});

            } catch (Exception e)
            {
                _logger.LogError("Erro ao gravar no banco de dados"+ e.Message);
                //ViewData["mensagem"] = "Erro! Tente novamente mais tarde";

                 return Json(new {status="ERRO", mensagem="falha no envio"});
            }
            
            //return View("Index",cad);
        }

    }
}
