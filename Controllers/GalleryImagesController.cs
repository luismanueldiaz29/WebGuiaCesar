using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using WebGuiaCesar.Models;

namespace WebGuiaCesar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GalleryImagesController : ControllerBase
    {
        private IWebHostEnvironment _env;
        private AplicactionContext _context;
        public GalleryImagesController(IWebHostEnvironment env, AplicactionContext context)
        {
            _env = env;
            this._context = context;
        }

        [HttpPost]
        public async Task<IActionResult> OnPostUploadAsync([FromForm]GalleryImageRequest model)
        {
            var response = new GalleryImageResponse(model.Name, model.Description, model.InfoInterest);

            foreach (var formFile in model.Files)
            {
                if (formFile.Length > 0)
                {
                    var filePath = Path.Combine(_env.WebRootPath, "images", formFile.FileName);

                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formFile.CopyToAsync(stream);
                        response.AddImage(formFile.FileName);
                    }
                }
            }
            _context.GalleryImage.Add(response);
            await _context.SaveChangesAsync();
            return Ok(response);
        }
    }
}