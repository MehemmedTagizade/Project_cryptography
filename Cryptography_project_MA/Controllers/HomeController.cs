using Cryptography_project_MA.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Cryptography_project_MA.Controllers
{
    public class HomeController : Controller
    {
       

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult MD5()
        {
            return View();
        }
        public IActionResult Ceaser()
        {
            return View();
        }
        public IActionResult Reverse()
        {
            return View();
        }
        public IActionResult Base64()
        {
            return View();
        }



    }
}
