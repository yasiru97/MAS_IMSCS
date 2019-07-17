using MASWebAPI.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MASWebAPI.Models
{
    public class ProblemDetail
    {

        ProblemDetail()
        {
            AddedDate = DateTime.Now;
            AddedDate = new DateTime(AddedDate.Year, AddedDate.Month, AddedDate.Day,
                AddedDate.Hour, AddedDate.Minute, AddedDate.Second, AddedDate.Kind);

        }
        [Key]
        public int TokenId { get; set; }
        public int AuditId { get; set; }
        [Required]
        public string ProblemName { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int AttentionLevel { get; set; }
        [Required]
        public DateTime AddedDate { get; set; }

        public string AddedBy { get; set; }


    }
}
