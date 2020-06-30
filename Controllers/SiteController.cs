using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using WebGuiaCesar.Models;

namespace WebGuiaCesar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteController: ControllerBase
    {
        private readonly AplicactionContext _context;

        public SiteController(AplicactionContext context){

            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GalleryImageResponse>>> GetMunicipio()
        {
            return await _context.GalleryImageResponse.ToListAsync();
        }

    }
}