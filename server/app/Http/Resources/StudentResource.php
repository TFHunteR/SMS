<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'std_ID' => $this->std_ID,
            'std_Name' => $this->std_Name,
            'std_Email' => $this->std_Email,
            'std_Date-of-Birth' => $this->std_date_of_birth,
            'std_Parents/Guardian' => $this->std_parents_guardian,
            'std_CP-Number' => $this->std_cp_number
        ];
    }
}
