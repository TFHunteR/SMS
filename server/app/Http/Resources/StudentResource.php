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
            'std_id' => $this->std_ID,
            'std_name' => $this->std_Name,
            'std_email' => $this->std_Email,
            'std_date_of_birth' => $this->std_date_of_birth,
            'std_parents_guardian' => $this->std_parents_guardian,
            'std_cp_number' => $this->std_cp_number,
            'std_gender' => $this->std_Gender,
            'std_class' => $this->class_Id
        ];
    }
}
