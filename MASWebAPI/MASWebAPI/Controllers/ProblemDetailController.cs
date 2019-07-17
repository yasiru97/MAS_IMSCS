using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MASWebAPI.Models;

namespace MASWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProblemDetailController : ControllerBase
    {
        private readonly ProblemDetailContext _context;

        public ProblemDetailController(ProblemDetailContext context)
        {
            _context = context;
        }

        // GET: api/ProblemDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProblemDetail>>> GetProblemDetails()
        {
            return await _context.ProblemDetails.ToListAsync();
        }

        // GET: api/ProblemDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProblemDetail>> GetProblemDetail(int id)
        {
            var problemDetail = await _context.ProblemDetails.FindAsync(id);

            if (problemDetail == null)
            {
                return NotFound();
            }

            return problemDetail;
        }

        // PUT: api/ProblemDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProblemDetail(int id, ProblemDetail problemDetail)
        {
            if (id != problemDetail.TokenId)
            {
                return BadRequest();
            }

            _context.Entry(problemDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProblemDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProblemDetail
        [HttpPost]
        public async Task<ActionResult<ProblemDetail>> PostProblemDetail(ProblemDetail problemDetail)
        {
            _context.ProblemDetails.Add(problemDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProblemDetail", new { id = problemDetail.TokenId }, problemDetail);
        }

        // DELETE: api/ProblemDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProblemDetail>> DeleteProblemDetail(int id)
        {
            var problemDetail = await _context.ProblemDetails.FindAsync(id);
            if (problemDetail == null)
            {
                return NotFound();
            }

            _context.ProblemDetails.Remove(problemDetail);
            await _context.SaveChangesAsync();

            return problemDetail;
        }

        private bool ProblemDetailExists(int id)
        {
            return _context.ProblemDetails.Any(e => e.TokenId == id);
        }
    }
}
