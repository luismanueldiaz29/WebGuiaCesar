using System.Collections.Generic;
using System.IO;

namespace WebGuiaCesar.Models
{
    public class GalleryImageResponse
    {
        public int Id { get; set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public string InfoInterest { get; set; }
        public string ImagesPath { get; private set; }

        public GalleryImageResponse(string name, string description, string infoInterest)
        {
            Name = name;
            Description = description;
            InfoInterest = infoInterest;
            ImagesPath = "";
        }

        public void AddImage(string fileName)
        {
            string Url = Path.Combine(Directory.GetCurrentDirectory(), "images");
            // ImagesPath = ($"/images/{fileName}");
            ImagesPath = ($"{Url}/{fileName}");
        }
    }
}