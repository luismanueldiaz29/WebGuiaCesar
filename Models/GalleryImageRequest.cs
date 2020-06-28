using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace WebGuiaCesar.Models
{
    public class GalleryImageRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string InfoInterest { get; set; }
        public List<IFormFile> Files { get; set; }
    }
}